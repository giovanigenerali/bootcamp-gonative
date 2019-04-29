import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const MenuCategories = styled.View``;

export const MenuItens = styled.FlatList`
  background-color: ${colors.primary};
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 14px 10px 10px 10px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  margin: 0 ${metrics.baseMargin / 2}px;
  opacity: ${({ active }) => (active ? '1' : '0.8')};
`;

export const MenuItemActive = styled.View`
  position: relative;
  bottom: -10;
  background-color: ${colors.white};
  height: 4px;
`;
