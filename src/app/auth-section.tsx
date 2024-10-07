import { auth, signIn, signOut } from '../../auth';
import { styled } from '../../styled-system/jsx';

const Wrapper = styled.main`
  position: absolute;
  top: 50%;
  right: 20px;
  transition: all 0.3s ease-in-out;
  transform: translateY(-50%);
  font-size: 1rem;
`;

export const AuthSection = async () => {
  const a = await auth();
  return (
    <Wrapper>
      {a?.user && (
        <div>
          <div>Hi, {a.user.name}</div>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button type="submit">Log Out</button>
          </form>
        </div>
      )}
      {!a?.user && (
        <div>
          <form
            action={async () => {
              'use server';
              await signIn('google');
            }}
          >
            <button type="submit">Signin with Google</button>
          </form>
        </div>
      )}
    </Wrapper>
  );
};

export default AuthSection;
