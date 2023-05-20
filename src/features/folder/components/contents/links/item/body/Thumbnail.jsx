import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { getOgData } from "../../../../../../linkAdder/helpers";
import IconFactory from "../../../../../../../shared/icons/IconFactory";

const Thumbnail = ({ url }) => {
  const [ogImageUrl, setOgImageUrl] = useState("");

  useEffect(() => {
    if (!url) return;
    const getOgImageUrl = async () => {
      const { ogImageUrl } = await getOgData(url);
      setOgImageUrl(ogImageUrl);
    };
    getOgImageUrl();
  }, [url]);

  return (
    <View style={styles.thumbnail}>
      {ogImageUrl && ogImageUrl.length > 0 ? (
        <Image source={{ uri: ogImageUrl }} style={{ width: 40, height: 40 }} />
      ) : (
        <IconFactory icon="Image" size={40} color="#CFCFCF" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 54,
    height: 54,
    marginRight: 12,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
  },
});

export default Thumbnail;
