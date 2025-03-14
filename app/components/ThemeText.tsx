import { Text, TextProps, } from 'react-native';
import globalStyles from '../styles/global-styles';


interface props extends TextProps {
    variant?: 'h1' | 'h2';
}



const ThemeText = ({ children, variant = 'h1', ...rest }: props) => {
    return (
        <Text style={[
            { color: 'white', fontFamily: 'SpaceMono' },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult,
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}>
            {children}
        </Text>
    );
};

export default ThemeText;