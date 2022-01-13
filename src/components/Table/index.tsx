import * as S from "./styles";
import { authors } from "../../mocks/Author/data";

type Data = typeof authors;

export type TableProps = {
  headers: string[];
  data?: Data;
};

export default function Table({ headers, data }: TableProps) {
  const cols = "1fr 1fr 1fr 3fr 2fr";
  return (
    <S.Table>
      <S.Thead cols={cols}>
        <tr>
          {headers.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </S.Thead>
      <S.Tbody cols={cols}>
        {data?.map(({ postid, title, author, content, date }) => (
          <tr>
            <td>{postid}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{content}</td>
            <td>{date}</td>
          </tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
}
