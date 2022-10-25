import { List, Avatar } from "antd"
import { useEffect, useState } from 'react';
import { IPostagem } from "../../context/PostagenProvider/types";
import { Api } from "../../services/api";
import './postagem.css'

export const Postagem = () => {

  function getAllPosts(){
  const [postagens, setPostagens] = useState<IPostagem[]>([]);
    useEffect(() => {
      Api.get<IPostagem[]>('/postagens')
      .then(response => setPostagens(response.data))
    },[]
  )
  return postagens;
  }

return (
  <div>
    <List
    style={{}}
    itemLayout="horizontal"
    dataSource={getAllPosts()}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<h3>{item.instituico?.nome}</h3>}
          description={item.mensagem}
        />
      </List.Item>
    )}
    />
    </div>
)
}