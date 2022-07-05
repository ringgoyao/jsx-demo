<template>
  <ex-search-table ref="tableRef" :columns="columns" :data="data" :show-checkbox="true"> </ex-search-table>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    const columns = ref([
      {
        label: '日期',
        prop: 'date',
        render: (row) => {
          return <span>{row.data}</span>
        }
        // render: (h, row) => {
        //   return h('span', row.date)
        // }
      },
      {
        label: '姓名',
        prop: 'name'
      },
      {
        label: '地址',
        prop: 'address'
      }
    ])

    const data = ref([
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
    ])

    return {
      columns,
      data
    }
  }
})
</script>
