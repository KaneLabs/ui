import React from 'react';
import propTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH } from 'queries';
import { withNavigation } from 'react-navigation';
import { SearchListItem } from './SearchListItem';
import { List } from '../List';

export const SearchList = withNavigation(({ searchText = '', navigation, onSelect }) => {
  const { data, error, loading } = useQuery(SEARCH, {
    variables: { searchText },
  });

  const navigateToItem = item => {
    navigation.navigate('ITEM', { ...item });
  };

  if (error) return null;
  if (loading) return null;

  if (data && data.search && data.search.length > 0) {
    return (
      <List noPadding>
        {data.search.map(item => (
          <SearchListItem
            onPressIn={() => navigateToItem(item)}
            onSelect={() => onSelect(item)}
            key={item.id}
            {...item}
          />
        ))}
      </List>
    );
  }

  return null;
});

SearchList.propTypes = {
  searchText: propTypes.string.isRequired,
};
