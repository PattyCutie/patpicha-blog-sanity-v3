import Image from "next/image";
import { LogoProps } from "sanity";

function Logo(props: LogoProps) {
  const { renderDefault, title } = props;
  return (
    <div className="flex gap-1 items-center justify-center">
      <Image
        className="rounded-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/modernportfolio-25952.appspot.com/o/files%2FPattyBeautCode3.png?alt=media&token=5198cf78-8cf1-43db-80be-1ee1ccdb825c"
        alt="logo"
        width={50}
        height={50}
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default Logo;
