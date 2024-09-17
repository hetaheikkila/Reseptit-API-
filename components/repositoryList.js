import { FlatList, Text, View, Image } from "react-native";

export default function RepositoryList(props) {
    return (
        <FlatList
            data={props.repositories}
            renderItem={({ item }) => (
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        {item.strMeal}
                    </Text>
                    <Image 
                        style={{ width: 100, height: 100 }} 
                        source={{ uri: item.strMealThumb }} 
                    />
                </View>
            )}
        />
    );
  }