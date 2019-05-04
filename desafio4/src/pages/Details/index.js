/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '~/store/ducks/product';
import CartActions from '~/store/ducks/cart';

import {
  Container,
  Loading,
  Product,
  ProductImage,
  ImageSource,
  ProductDetails,
  ProductInfo,
  ProductName,
  ProductBrand,
  ProductPrice,
  ButtomAddToCart,
  AddToCart,
} from './styles';

class Details extends Component {
  static navigationOptions = {
    title: 'Detalhe do produto',
  };

  static propTypes = {
    loadProductRequest: PropTypes.func.isRequired,
    addCart: PropTypes.func.isRequired,
    productDetail: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      product: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string,
          name: PropTypes.string,
          brand: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }).isRequired,
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { navigation, loadProductRequest } = this.props;
    const productId = navigation.getParam('productId');

    loadProductRequest(productId);
  }

  addToCart = (product) => {
    const { navigation, addCart } = this.props;

    addCart({ ...product, quantity: 1 });

    navigation.navigate('Cart');
  };

  render() {
    const { productDetail } = this.props;
    const { data: product, loading } = productDetail;

    return (
      <Container>
        {loading && <Loading size="small" color="#333" />}

        {!loading && product && (
          <Product>
            <ProductImage>
              <ImageSource source={{ uri: product.image }} />
            </ProductImage>
            <ProductDetails>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductBrand>{product.brand}</ProductBrand>
              </ProductInfo>
              <ProductPrice>{Numeral(product.price).format('$ 0,0.00')}</ProductPrice>
            </ProductDetails>
            <ButtomAddToCart onPress={() => this.addToCart(product)}>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </ButtomAddToCart>
          </Product>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productDetail: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
