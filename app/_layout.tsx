import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this
import { Tabs } from "expo-router";
import { createTamagui, PortalProvider, TamaguiProvider } from "tamagui";

const config = createTamagui(defaultConfig);

export default function name() {
  return (
    <TamaguiProvider config={config}>
      <PortalProvider>
        <Tabs />
      </PortalProvider>
    </TamaguiProvider>
  );
}
