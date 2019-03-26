import vue from 'vue'
import Toast from './components/Toast'

const ToastConstructor = vue.extend(Toast);

/**
 * usage:
 * import registryToast from '...'
 * Vue.use(registryToast)
 * 
 * this.$toast('hello'[, 5000, callback])
 */
function showToast(content, sec, callback) {
    let time = sec ? sec : 3000;

    const toastDom = new ToastConstructor({
        el: document.createElement('div'),
        data() {
            return {
                content,
                time,
                show: false
            }
        },
        watch: {
            show(val) {
                if (val === true) {
                    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                } else {
                    document.getElementsByTagName('body')[0].style.overflow = 'auto';
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.show = true;
            }, 100);
            setTimeout(() => {
                if (callback && typeof callback == 'function') {
                    callback();
                    this.close();
                } else {
                    this.close();
                }
            }, this.time);
        },
        methods: {
            close() {
                this.show = false;
                // 避免dom一直疊加
                setTimeout(() => {
                    document.body.removeChild(toastDom.$el);
                }, 100);
            }
        }
    });

    document.body.appendChild(toastDom.$el);
}

function registryToast() {
    vue.prototype.$toast = showToast;
}

export default registryToast