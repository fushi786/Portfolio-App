FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
# Copy only package files first (if they exist)
COPY app/package.json ./app/package.json
COPY app/package-lock.json ./app/package-lock.json
# If you are using yarn or pnpm instead, copy those lockfiles instead and adjust commands

WORKDIR /app/app
RUN npm ci || npm install

FROM base AS builder
WORKDIR /app
COPY app ./app
COPY --from=deps /app/app/node_modules ./app/node_modules
WORKDIR /app/app
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000

COPY --from=builder /app/app/public ./public
COPY --from=builder /app/app/.next ./.next
COPY --from=builder /app/app/node_modules ./node_modules
COPY --from=builder /app/app/package.json ./package.json

CMD ["npm", "start"]
