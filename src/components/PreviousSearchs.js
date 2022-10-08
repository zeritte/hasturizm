import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { addSearchSelector, arrivalLocationSelector, departureLocationSelector } from '../lib/selectors';

export default function PreviousSearchs() {
  const departureLocation = useSelector(departureLocationSelector);
  const arrivalLocation = useSelector(arrivalLocationSelector);
  const addSearch = useSelector(addSearchSelector);
  // const dispatch = useDispatch();
  // const searchs = useSelector((state) => state.search);
  const searchs = addSearch;

  return (
    <View>
      <Text value={departureLocation?.name} />
      <Text value={arrivalLocation?.name} />
      <Text value={searchs.departureLocation} />
      <Text value={searchs.arrivalLocation} />
    </View>
  );
}
