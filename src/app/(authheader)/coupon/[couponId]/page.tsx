import Link from "next/link"
import Button from "@/components/molecules/Button/Button"
import StretchedCoupon from "@/components/molecules/Coupon/StretchedCoupon"
// import { gql } from "@apollo/client"

// const REGISTER_USER_COUPON = gql`
//   mutation RegisterUserCoupon($userId: string, $couponId: couponId) {
//     registerUserCoupon(userId: $userId, couponId: couponId) {
//       UserCoupon
//     }
//   }
// `

// 이 페이지는 쿠폰을 찍었을때만 오는 페이지
// 서버 컴포넌트/액션으로 뮤테이션 보내기

export default function CouponRegisterPage({ params }: { params: { couponId: string } }) {
  const { couponId } = params

  return (
    <>
      couponId: {couponId}
      <CouponPageTitle />
      <CouponForm />
      <div className="border">
        mutation RegisterUserCoupon($userId: string, $couponId: couponId) [ registerUserCoupon(userId: $userId,
        couponId: couponId) [ resultCode ] ]
      </div>
    </>
  )
}

const CouponPageTitle = () => {
  return <h1 className="text-center text-xl font-bold">쿠폰 등록하기</h1>
}

const CouponForm = () => {
  return (
    <div className="container mx-auto max-w-screen-sm overflow-hidden  rounded-lg border border-black-100">
      <div className="bg-white-500 py-2 text-center">
        <p>등록될 쿠폰입니다.</p>
      </div>
      <div className="px-4 py-6">
        <StretchedCoupon
          coupon={{
            id: "1",
            type: "timebonus",
            bookable: "seat",
            digit: 10,
            issuedAt: 0,
            expiresAt: 0,
          }}
        ></StretchedCoupon>
        <div className="my-12"></div>
        <form>
          <div className="flex flex-row justify-center">
            <Link href="/user/coupon">
              <Button form={true}>쿠폰등록</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
