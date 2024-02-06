import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <div className="container bg-white-300 px-2">
      <div className="flew-row flex items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="box-border py-2 pr-2">
            <Image src="/images/app_logo.png" alt="궁극의 창작공간" width="32" height="32" />
          </div>
          <h1 className="text-lg font-bold">궁극의 창작공간</h1>
        </div>
        <div className="flex flex-row gap-1">
          <Link href="/signin" className="hover:underline">
            로그인
          </Link>
          <Link href="/signup" className="hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
}
