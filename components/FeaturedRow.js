import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
	return (
		<View>
			<View className='mt-4 flex-row items-center justify-between px-4'>
				<Text className='font-bold text-lg'>{title}</Text>
				<ArrowRightIcon color='#00CCBB' />
			</View>

			<Text className='text-xs text-gray-500 px-4'>{description}</Text>

			<ScrollView>
				<RestaurantCard
					id={123}
					imgUrl='https://links.papareact.com/gn7'
					title='Title'
					rating={4.5}
					genre='Italian'
					address='main street'
					short_description='Best italian food'
					dishes={[]}
					long={20}
					lat={0}
				/>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
