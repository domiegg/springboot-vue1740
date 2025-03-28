const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot9zo8s/",
            name: "springboot9zo8s",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot9zo8s/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智能热度分析和自媒体推送平台"
        } 
    }
}
export default base
