import { List, Avatar } from "antd"
import { useState } from 'react';
import { IPostagem } from "../../context/PostagenProvider/types";
import { Api } from "../../services/api";

export const Postagem = () => {
  
  const [postagens, setUserList] = useState<IPostagem[]>([]);
    Api.get<IPostagem[]>('/postagens')
          .then(response => {
              console.log(response.data);
              setUserList( response.data );
          });

return (
    <List
    itemLayout="horizontal"
    dataSource={postagens}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<h3>Hospital Ernesto Dorneles</h3>}
          //title={<a href="https://ant.design">{item.id}</a>}
          description={item.mensagem}
        />
      </List.Item>
    )}
  />
)


}