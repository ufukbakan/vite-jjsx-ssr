import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: [
        "text",
        "html",
        "lcov"
      ],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/client/entrypoint.ts',
        'src/server/entrypoint.ts',
        'src/client/routes.ts',
        'src/server/routes.ts',
        'src/infra/**/*',
        'src/dto/**/*',
        '**/*.d.ts',
      ],
    },
  },
});