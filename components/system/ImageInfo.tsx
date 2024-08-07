import React from 'react';
import {
	Heading,
	Button,
	Text,
	Box
} from '@chakra-ui/react';
import Link from 'next/link';
import { AssetsType } from '@core/models/Assets';

const ImageInfo = ({ image }: { image: AssetsType }) => {
	return (
		<Box
			display='flex'
			flexDir='column'
			gap={{ base: '.3rem', md: '1rem' }}
			my={{ base: '.3rem', md: '1rem' }}
			px={{ base: '1rem', md: '2rem' }}
			maxW={{ base: '95%', md: '82%' }}
		>
			<Heading py='1rem' lineHeight='2.5rem'>{image.title}</Heading>
			{
				image.extLink &&
					<Link
						href={image.extLink ?? ''}
						passHref={true}
						target='_blank'
					>
						<Button
							variant='outline'
							sx={{
								':hover': {
									backgroundColor: '#535353'
								}
							}}
						>
							{image.extLinkText}
						</Button>
					</Link>
			}
			<Text
				as='span'
				overflow='auto'
				display='inline-block'
				fontSize='1.2rem'
				lineHeight='2.5rem'
				dangerouslySetInnerHTML={{ __html: image.richDescription ?? '' }}
			/>
		</Box>
	)
}

export default ImageInfo;