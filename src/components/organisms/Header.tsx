import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container flex flex-row items-center bg-white-300 px-2">
      <Link className="inline-block" href="/">
        <Image
          className="box-border py-2 pr-2"
          src="/images/app_logo.png"
          alt="궁극의 창작공간"
          width="36"
          height="36"
        />
      </Link>
      <h1 className="text-lg font-bold">궁극의 창작공간</h1>
      <div className="grow"></div>
      <div className="flex flex-row gap-2">
        <Link href="/user/inuse" className="hover:underline">
          내 이용권
        </Link>
        <Link href="/signup" className="hover:underline">
          로그아웃
        </Link>
        <Link href="/signin" className="hover:underline">
          로그인
        </Link>
        <Link href="/signoff" className="hover:underline">
          회원가입
        </Link>
      </div>
    </div>
  );
}