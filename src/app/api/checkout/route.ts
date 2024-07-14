import Stripe from "stripe";
import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST() {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json(
        { message: "You must be logged in to checkout", ok: false },
        { status: 401 }
      );
    }

    const user = await currentUser();

    const params: Stripe.Checkout.SessionCreateParams = {
      line_items: [
        {
          price: process.env.PRICE_ID as string,
          quantity: 1,
        },
      ],
      customer_email: user?.emailAddresses[0].emailAddress,
      metadata: {
        userId: userId,
      },
      mode: "subscription",
      success_url:
        process.env.DEPLOYMENT_URL || "https://saas-template-azure.vercel.app/",
      cancel_url:
        process.env.DEPLOYMENT_URL || "https://saas-template-azure.vercel.app/",
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "something went wrong", ok: false },
      { status: 500 }
    );
  }
}
