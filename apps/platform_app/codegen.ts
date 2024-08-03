import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.ts'],
  generates: {
    './src/graphql/codegen/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
