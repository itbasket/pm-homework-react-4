const selector = state => ({
  photos: state.photos.items,
  isLoading: state.photos.isLoading
})

export default selector;