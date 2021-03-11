const selector = state => ({
  photo: state.photos.active,
  isLoading: state.photos.isLoading
})

export default selector;