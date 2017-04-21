import {
    FormData
} from 'common/';

module.exports = {
    name: 'edit-article',
    components: {
        FormData
    },
    data() {
        return {
            fields: [{
                key: 'cate',
                type: 'select',
                value: {
                    default: 'sanwen',
                    list: [{
                        value: 'jishu',
                        text: '技术'
                    }, {
                        value: 'sanwen',
                        text: '散文'
                    }, {
                        value: 'qita',
                        text: '其他'
                    }]
                },
                desc: '请选择文章分类',
                label: '单选下拉框'
            }, {
                key: 'tabs',
                type: 'select',
                multiple: true,
                value: {
                    default: ['javascript', 'html'],
                    list: [{
                        value: 'html',
                        text: 'html'
                    }, {
                        value: 'css',
                        text: 'css'
                    }, {
                        value: 'javascript',
                        text: 'javascript'
                    }, {
                        value: 'jquery',
                        text: 'jquery'
                    }]
                },
                desc: '请选择文章标签',
                label: '多选下拉框'
            }]
        }
    },
    methods: {
        onSubmit(data) {
            this.$emit('onTest', data);
        }
    }
}