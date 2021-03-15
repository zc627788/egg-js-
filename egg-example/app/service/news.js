const Service = require('egg').Service
class NewService extends Service {
    async list(page = 1) {
        const { serveUrl, pageSize } = this.config.news;
    const a = await this.ctx.curl('https://www.baidu.com/s?wd=鬼')
    console.log('a', a)

        const { data: idList } = await this.ctx.curl(`${serveUrl}/topstories.json`, {
            data: {
                orderBy: '"$key"',
                startAt: `"${pageSize * (page - 1)}"`,
                endAt: `"${pageSize * page - 1}"`,
            },
            dataType: 'json'
        });
        console.log('idList', idList)
        const newsList = await Promise.all(
            Object.keys(idList).map(keys => {
                const url = `${serveUrl}/item/${idList[keys]}.json`;
                console.log('url', url)
                return this.ctx.curl(url, { dataType: 'json' });
            })
        );
        return newsList.map(res => res.data);
    }

    
}
module.exports = NewService;
