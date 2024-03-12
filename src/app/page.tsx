"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLayoutEffect, useMemo, useState } from "react";
import axios from "axios";
import { IconLogin } from "@/components/icons/login";
import { useAuthStore } from "./store/auth";
import isAuth from "@/components/isAuth";
import { Loading } from "@/components/icons/loading";


const Home = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = useMemo(() => searchParams.get("code"), []);
  const [isLoading, setIsLoading] = useState(false);

  const getTokenData = async () => {
    const data = {
      grant_type: "authorization_code",
      client_id: "css2ard64fmtopviba5m8pf1r",
      code: code,
      redirect_uri:
        "https://dev-projectx.s3.ap-southeast-1.amazonaws.com/index.html",
      scope: "openid",
    };
    let config = {
      url: "/api/token",
      method: "post",
      data,
    };
    setIsLoading(true);
    try {
      const response = await axios.request(config);
      if (response?.status === 200) {
        useAuthStore.setState({
          token: response.data,
        });
        router.push("/home");
      }
      setIsLoading(false);
      return null;
    } catch (error) {
      setIsLoading(false);
      return null;
    }
  };

  useLayoutEffect(() => {
    if (code) {
      getTokenData();
    }
  }, [code]);

  return (
    <>
      <main className="py-8">
        <section>
          <div className="w-full 2xl:container 2xl:mx-auto px-8">
            <div className="flex flex-col items-center justify-center">
              <Link
                href="https://dev-project-x.auth.ap-southeast-1.amazoncognito.com/oauth2/authorize?response_type=code&client_id=css2ard64fmtopviba5m8pf1r&redirect_uri=https://dev-projectx.s3.ap-southeast-1.amazonaws.com/index.html&scope=openid&state"
                className="flex items-center gap-2 my-20 text-white bg-rhinoThemeColor hover:bg-rhinoThemeColorDark py-3 px-4 rounded"
              >
                {isLoading ? <Loading /> : <IconLogin />}
                Sign in with google
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
