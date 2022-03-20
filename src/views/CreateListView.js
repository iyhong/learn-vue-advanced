import ListView from '@/views/ListView';
import bus from '@/utils/bus';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    created() {
      bus.$emit('start:spinner');

      setTimeout(() => {
        this.$store
          .dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched!!');
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.error(err);
          });
      }, 1000);
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
