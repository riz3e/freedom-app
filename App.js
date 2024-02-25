import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { supabase } from './supabase';

export default function EmailPasswordAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailPassword = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) {
        console.error('Error signing in with email and password:', error.message);
      } else {
        console.log('Signed in with email and password:', user);
        // Действия после успешной аутентификации
      }
    } catch (error) {
      console.error('Error signing in with email and password:', error.message);
    }
  };

  return (
    <>
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={signInWithEmailPassword}
      />
    </>
  );
}
