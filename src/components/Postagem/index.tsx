import { message, List, Avatar } from "antd"
import React from 'react';
import { Api } from "../../services/api";



const dataTT = await Api.get("/postagens/")

export const Postagem = () => {
    /*
    async function onGetPostagens(){
        try {
            await Api.get("/postagens");
        } catch (error) {
            message.error('Não foi possivel visualizar postagens!')
        }
    }
*/
console.log(dataTT)


    const data = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];

return (
    <List
    itemLayout="horizontal"

    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
)


}