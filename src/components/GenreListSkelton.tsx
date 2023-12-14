import { Box, HStack, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'

const GenreListSkelton = () => {
  return (
    <HStack paddingY={4} >
        <Skeleton width={'30px'} height='30px' borderRadius={'4px'} />
        
        <SkeletonText width={'80%'}  noOfLines={2}  skeletonHeight='2.5' />
        
    </HStack>
  )
}

export default GenreListSkelton