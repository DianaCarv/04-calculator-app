import { View, Text } from 'react-native';
import globalStyles from './styles/global-styles';
import ThemeText from './components/ThemeText';
import CalculatorButton from './components/CalculatorButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorCountainer} >
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText
          variant='h1'
        >70 x 50
        </ThemeText>
        <ThemeText
          variant='h2'
        >250
        </ThemeText>

      </View>

      {/* Fila de Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton label="C"
          blackText
          color={Colors.orange}
          onPress={() => console.log('C')} />
        <CalculatorButton label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log('+/-')} />
        <CalculatorButton label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log('del')} />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => console.log('÷')} />


      </View>





    </View>

  );
}

export default CalculatorApp;