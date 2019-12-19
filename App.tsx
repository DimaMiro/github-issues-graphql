import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import AppNavigator from './src/shared/AppNavigator';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context'

import {AUTH_TOKEN} from './src/shared/constants'

export default function App() {

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : ''
            }
        }
    })

    const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'})

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })
  return (
      <ApolloProvider client={client}>
          <View style={{ flex: 1 }}>
              {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
              <AppNavigator/>
          </View>
      </ApolloProvider>
  );
}
