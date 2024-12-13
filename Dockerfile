FROM node:22-slim AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:22-slim AS runner

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create non-root user with compliant UID
RUN addgroup --system --gid 10001 nodejs && \
    adduser --system --uid 10001 sveltekit

COPY --from=builder --chown=sveltekit:nodejs /app/build ./build
COPY --from=builder --chown=sveltekit:nodejs /app/package.json /app/pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Use non-root user
USER sveltekit

EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

# Fix: Change the CMD to use the correct server entry point
CMD ["node", "build/index.js"]
