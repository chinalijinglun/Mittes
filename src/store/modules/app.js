
const app = {
  state: {
    isFirstVisible:false,
    isSecondVisible:false,
    modalTitle:'',
    isBrandModalVisible:false
  },
  mutations: {
    ADD_FIRST_CATEGORY : state => {
      state.isFirstVisible = true;
      state.modalTitle = '添加一级品类'
    },
    EDIT_FIRST_CATEGORY : state => {
      state.isFirstVisible = true;
      state.modalTitle = '修改一级品类'
    },
    ADD_SECOND_CATEGORY: state => {
      state.isSecondVisible = true;
      state.modalTitle = '添加二级品类'
    },
    EDIT_SECOND_CATEGORY: state => {
      state.isSecondVisible = true;
      state.modalTitle = '修改二级品类'
    },
    DISMISS_MODAL: (state,{type}) => {
      switch (type) {
        case 'first' :
          state.isFirstVisible = false;
          break;
        case 'second' :
          state.isSecondVisible = false;
          break;
        case 'brand' :
          state.isBrandModalVisible = false;
          break;
        default :
          return;
      }
    },
    EDIT_BRAND: (state) => {
      state.isBrandModalVisible = true;
      state.modalTitle = '修改品牌'
    },
    ADD_BRAND: (state) => {
      state.isBrandModalVisible = true;
      state.modalTitle = '添加品牌'
    }
  },
  actions: {
    addFirstCategory:({commit}) => {
      commit('ADD_FIRST_CATEGORY')
    },
    editFirstCategory:({commit}) => {
      commit('EDIT_FIRST_CATEGORY')
    },
    addSecondCategory:({commit}) => {
      commit('ADD_SECOND_CATEGORY')
    },
    editSecondCategory:({commit}) => {
      commit('EDIT_SECOND_CATEGORY')
    },
    dismissModal:({commit},type) => {
      commit('DISMISS_MODAL',{type})
    },
    editBrand:({commit}) => {
      commit('EDIT_BRAND')
    },
    addBrand:({commit}) => {
      commit('ADD_BRAND')
    }
  }
};

export default app