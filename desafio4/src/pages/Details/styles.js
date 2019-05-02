import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const Loading = styled.ActivityIndicator`
  margin-top: ${metrics.basePadding * 2}px;
`;

export const Product = styled.View`
  background-color: ${colors.white};
  margin: ${metrics.basePadding / 2}px;
  padding: ${metrics.basePadding}px;
  border-radius: 3;
`;

export const ProductImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageSource = styled.Image`
  width: 200px;
  height: 400px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const ProductInfo = styled.View``;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
`;

export const ProductBrand = styled.Text`
  font-size: 14px;
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin / 4}px;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.secondary};
`;

export const ButtomAddToCart = styled.TouchableOpacity`
  height: 45px;
  margin-top: ${metrics.basePadding}px;
  background-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius};
`;

export const AddToCart = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
