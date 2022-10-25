import { List, Avatar } from "antd"
import { useState } from 'react';
import { IPostagem } from "../../context/PostagenProvider/types";
import { Api } from "../../services/api";
import styles from './postagem.css'

export const Postagem = () => {

  function getAllPosts(){
  const [postagens, setPostagens] = useState<IPostagem[]>([]);
    Api.get<IPostagem[]>('/postagens')
          .then(response => {
              setPostagens( response.data );
          });
  return postagens;
  }
  //const post = getAllPosts()
return (
  <div className={styles}>
    <List
    //style={{padding:150, width: 1800, top: -290}}
    itemLayout="horizontal"
    dataSource={getAllPosts()}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<h3>{item.instituico?.nome}</h3>}
          description={item.mensagem}
        style={{width:800}}/>
      </List.Item>
    )}
    />
    </div>
)
}