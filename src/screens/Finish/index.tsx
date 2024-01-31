import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";

import { Button } from "../../components/Button";
import { Stars } from "../../components/Stars";

interface Params {
  total: string;
  points: string;
}

export function Finish() {
  const { navigate } = useNavigation();

  const route = useRoute();
  const { points, total } = route.params as Params;

  return (
    <View style={styles.container}>
      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>Parabéns!</Text>

        <Text style={styles.subtitle}>
          Você acertou {points} de {total} questões
        </Text>
      </View>

      <Button title="Ir para o início" onPress={() => navigate("home")} />
    </View>
  );
}
