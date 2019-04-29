import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const Loading = styled.ActivityIndicator`
  margin-top: ${metrics.basePadding * 2}px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: metrics.baseMargin,
  },
})``;

export const Product = styled.TouchableOpacity`
  background-color: ${colors.white};
  flex: 1;
  margin: ${metrics.basePadding / 2}px;
  padding: ${metrics.basePadding / 2}px;
  border-radius: 3;
`;

export const ProductImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageSource = styled.Image`
  width: 140px;
  height: 200px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
  margin-top: ${metrics.baseMargin}px;
`;

export const ProductBrand = styled.Text`
  font-size: 12px;
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin / 4}px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secondary};
  margin-top: ${metrics.baseMargin / 2}px;
`;
