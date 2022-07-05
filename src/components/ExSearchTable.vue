<template>
  <div class="table-detail">
    <el-table v-bind="$attrs" v-on="$listeners">
      <template #empty>
        <empty-list></empty-list>
      </template>
      <el-table-column v-if="showCheckbox" type="selection" :width="checkBoxColumnWidth" align="center" :selectable="selectable"></el-table-column>
      <el-table-column v-if="showIndex" type="index" width="50" label="序号" />
      <template v-for="(column, index) in columns">
        <el-table-column :key="index" v-if="!column.hasOwnProperty('children')" v-bind="column" :align="column.align || 'center'">
          <template #default="{ row }">
            <span v-if="!column.render">{{ row[column.prop] }}</span>
            <template v-else>
              <ex-search-table-column :scope="row" :render="column.render"></ex-search-table-column>
            </template>
          </template>
        </el-table-column>
        <el-table-column :key="index" v-else v-bind="column" :align="column.align || 'center'">
          <el-table-column v-for="(child, index0) in column.children" v-bind="child" :key="index + index0" :align="child.align || 'center'">
            <template #default="{ row }">
              <span v-if="!child.render">{{ row[child.prop] }}</span>
              <template v-else>
                <ex-search-table-column :scope="row" :render="child.render"></ex-search-table-column>
              </template>
            </template>
          </el-table-column>
        </el-table-column>
      </template>
      <slot></slot>
      <template #append>
        <slot name="append"></slot>
      </template>
    </el-table>
    <el-pagination layout="total, sizes, prev, pager, next, jumper" :current-page="currentPage" :hideOnSinglePage="true" :background="true" :total="total" @current-change="handleCurrentChange" @size-change="handleSizeChange" :page-size="pageSize" :page-sizes="pageSizes"></el-pagination>
  </div>
</template>
<script>
import { computed, defineComponent, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  name: '',
  props: {
    columns: {
      type: Array,
      required: true
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    checkBoxColumnWidth: {
      type: String,
      default: '55'
    },
    selectable: {
      type: Function,
      default: function () {
        return true
      }
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    //pager组件相关
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 15, 30, 50]
    }
  },
  setup(props, { emit }) {
    const handleCurrentChange = (val) => {
      emit('current-change', val)
    }
    const handleSizeChange = (val) => {
      emit('size-change', val)
    }

    return {
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>
<style lang="scss"></style>
