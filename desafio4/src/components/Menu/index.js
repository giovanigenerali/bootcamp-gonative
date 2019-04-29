import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesActions from '~/store/ducks/categories';

import {
  MenuCategories, MenuItens, MenuItem, Title, MenuItemActive,
} from './styles';

class Menu extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    setCurrentCategory: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    categoryCurrent: 1,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;

    loadCategoriesRequest();
  }

  handleMenuItemPress = (categoryId) => {
    const { setCurrentCategory } = this.props;

    setCurrentCategory(categoryId);

    this.setState({ categoryCurrent: categoryId });
  };

  render() {
    const { categories } = this.props;
    const { categoryCurrent } = this.state;

    return (
      <MenuCategories>
        <MenuItens
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories.data}
          keyExtractor={category => String(category.id)}
          renderItem={({ item: category }) => (
            <MenuItem onPress={() => this.handleMenuItemPress(category.id)}>
              <Title active={!!(categoryCurrent && categoryCurrent === category.id)}>
                {category.title}
              </Title>
              {categoryCurrent && categoryCurrent === category.id ? <MenuItemActive /> : null}
            </MenuItem>
          )}
        />
      </MenuCategories>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Menu),
);
