import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '~/store/ducks/product';

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
            <ButtomAddToCart>
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

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
