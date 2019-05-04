import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '~/styles';

import {
  Container,
  List,
  Product,
  ProductImage,
  ImageSource,
  ProductDetails,
  ProductInfo,
  ProductName,
  ProductBrand,
  ProductPrice,
  ProductActions,
  ProductQuantityInput,
  ProductDeleteButtom,
  Subtotal,
  SubtotalText,
  SubtotalPrice,
  Message,
  MessageText,
} from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  static propTypes = {
    updateProduct: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
    }).isRequired,
    total: PropTypes.number.isRequired,
  };

  handleUpdate = (productId, quantity) => {
    const { updateProduct } = this.props;

    updateProduct(productId, Number(quantity));
  };

  handleRemove = (productId) => {
    const { removeProduct } = this.props;

    removeProduct(productId);
  };

  render() {
    const { cart, total } = this.props;

    return (
      <Container>
        {cart.length > 0 ? (
          <Fragment>
            <List
              data={cart}
              keyExtractor={product => String(product.id)}
              renderItem={({ item: product }) => (
                <Product>
                  <ProductImage>
                    <ImageSource source={{ uri: product.image }} />
                  </ProductImage>
                  <ProductDetails>
                    <ProductInfo>
                      <ProductName>{product.name}</ProductName>
                      <ProductBrand>{product.brand}</ProductBrand>
                      <ProductPrice>{Numeral(product.price).format('$ 0,0.00')}</ProductPrice>
                    </ProductInfo>
                    <ProductActions>
                      <ProductQuantityInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        defaultValue={String(product.quantity)}
                        maxLength={2}
                        keyboardType="numeric"
                        onChangeText={(quantity) => {
                          if (/^\d+$/.test(quantity)) {
                            this.handleUpdate(product.id, quantity);
                          }
                        }}
                      />
                      <ProductDeleteButtom onPress={() => this.handleRemove(product.id)}>
                        <Icon name="times" size={20} color={colors.regular} />
                      </ProductDeleteButtom>
                    </ProductActions>
                  </ProductDetails>
                </Product>
              )}
            />
            <Subtotal>
              <SubtotalText>Subtotal</SubtotalText>
              <SubtotalPrice>{Numeral(total).format('$ 0,0.00')}</SubtotalPrice>
            </Subtotal>
          </Fragment>
        ) : (
          <Message>
            <MessageText>O carrinho está vazio</MessageText>
          </Message>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.data,
  total: state.cart.data.reduce((total, product) => total + product.price * product.quantity, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
