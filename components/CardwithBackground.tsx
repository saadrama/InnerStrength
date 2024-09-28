import { brown } from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react';
import { ImageSourcePropType, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface propTypes {
    title: string;
    color: string;
    text_Info: string[];
    image_Uri: ImageSourcePropType;
    CTA_Link: any;
    CTA_Bg_Color?: string;
    CTA_Color?: string;
    CTA_Text?: string;
    blank_Space?: number;
}

const CardwithBackground: React.FC<propTypes> = ({
    title,
    color,
    text_Info,
    image_Uri,
    CTA_Link,
    CTA_Bg_Color,
    CTA_Color,
    CTA_Text,
    blank_Space,
}) => {
    return (
        <Card style={styles.card} >
            <Card.Title title={title} titleVariant="titleLarge" titleStyle={{ color: color }} />
            <Card.Content>
                {text_Info.map((info, index) => (
                    <Text key={index} variant="bodyLarge" style={{ color: color, fontWeight: "bold" }}>
                        {info}
                    </Text>
                ))}
                <View style={{ height: blank_Space }}></View>
            </Card.Content>
            <Card.Cover source={image_Uri} style={styles.cardCover} />
            <Card.Actions>
                <Link
                    style={{
                        width: '100%',
                        backgroundColor: CTA_Bg_Color,
                        color: CTA_Color,
                        height: 40,
                        textAlign: 'center',
                        paddingTop: 7,
                        borderRadius: 20,
                    }}
                    href={CTA_Link}
                >
                    {CTA_Text}
                </Link>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 20,
        marginTop: 0,
    },
    cardCover: {
        position: 'absolute',
        elevation: -1,
        left: 0,
        right: 0,
    },
});

export default CardwithBackground;