import { auth } from '../../auth';

export default function Home() {
  auth().then((a) => console.log(a));

  return <div>its here</div>;
}
