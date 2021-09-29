import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TelaPrincipal} from "./screens/TelaPrincipal/index"

export default function App() {
  return (
  <>
    <TelaPrincipal/>
    <StatusBar style = "auto" />
  </>   
  );
}

