import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: metrics.baseMargin,
  },
})``;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
`;

export const ProductImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageSource = styled.Image`
  width: 60px;
  height: 100px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: ${metrics.baseMargin * 2}px;
`;

export const ProductInfo = styled.View`
  justify-content: flex-start;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
`;

export const ProductBrand = styled.Text`
  font-size: 11px;
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin / 4}px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secondary};
  margin-top: ${metrics.baseMargin / 2}px;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ProductQuantityInput = styled.TextInput`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.dark};
  width: 40px;
  height: 27px;
  padding-left: ${metrics.baseMargin}px;
  border-width: 1;
  border-color: ${colors.regular};
  border-radius: ${metrics.baseRadius};
`;

export const ProductDeleteButtom = styled.TouchableOpacity`
  margin-left: ${metrics.baseMargin}px;
`;

export const Subtotal = styled.View`
  padding-top: ${metrics.basePadding / 2}px;
  padding-bottom: ${metrics.basePadding / 2}px;
  background-color: ${colors.whiteLighter};
  align-items: center;
  justify-content: center;
  border-top-width: 1;
  border-top-color: ${colors.light};
`;

export const SubtotalText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const SubtotalPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
  margin-top: ${metrics.baseMargin}px;
`;

export const Message = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin * 2}px;
`;
export const MessageText = styled.Text`
  color: ${colors.dark};
  font-weight: bold;
`;
