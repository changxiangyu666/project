package com.wen;


import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @Author:HowieLee
 * @Date:1/8/2019
 * @Description:com.howie.wen
 * @version:1.0
 */
class MyThread extends Thread{
    private int tid;

    public MyThread(int tid){
        this.tid = tid;
    }

    @Override
    public void run() {
        try {
            for(int i = 0 ; i < 10 ; i++){
                Thread.sleep(1000);
                System.out.println(String.format("%d:%d",tid,i));
            }


        }catch (Exception e){
            //e.printStackTrace();
        }
    }
}

class Consumer implements Runnable{
    BlockingQueue<String> q;
    Consumer(BlockingQueue<String> q){
        this.q = q;
    }
    @Override
    public void run() {
        try {
            while(true){
                System.out.println(Thread.currentThread().getName() + ":" + q.take());
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

class Producer implements Runnable{
    BlockingQueue<String> q;
    Producer(BlockingQueue<String> q){
        this.q = q;
    }
    @Override
    public void run() {
        try {
            for(int i = 0 ; i < 100 ; i++){
                Thread.sleep(1000);
                q.put(String.valueOf(i));
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}

public class MultiThreadTests {
    public static void testThread(){

//        for(int i = 0 ; i < 10;i++){
//            new MyThread(i).start();
//        }
        for(int i = 0 ; i < 10;i++){
            final int finali = i;
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        for(int j = 0 ; j < 10 ; j++){
                            Thread.sleep(1000);
                            System.out.println(String.format("T2 %d : %d",finali , j));
                        }


                    }catch (Exception e){
                        e.printStackTrace();
                    }
                }
            }).start();
        }

    }

    private static Object obj = new Object();

    private static void testSynchronized1(){
        synchronized (obj){
            try {
                for(int j = 0 ; j < 10 ; j++){
                    Thread.sleep(1000);
                    System.out.println(String.format("T3 %d",j));
                }


            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    private static void testSynchronized2(){
        synchronized (obj){
            try {
                for(int j = 0 ; j < 10 ; j++){
                    Thread.sleep(1000);
                    System.out.println(String.format("T4 %d",j));
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    public static void testSynchronized(){
        for(int i = 0 ; i < 10 ; i++){
            new Thread(new Runnable() {
                @Override
                public void run() {
                    testSynchronized1();
                    testSynchronized2();
                }
            }).start();
        }
    }


    public static void testBlockingQueue(){
        BlockingQueue<String> q = new ArrayBlockingQueue<String>(10);
        new Thread(new Producer(q)).start();
        new Thread(new Consumer(q),"Consumer1").start();
        new Thread(new Consumer(q),"Consumer2").start();
    }

    private static int userId;
    private static ThreadLocal<Integer> threadLocalUserIds = new ThreadLocal<>();
    public static void testThreadLocal(){//线程独立变量
        for(int i = 0 ; i < 10 ; i++){
            final int finali = i;
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        threadLocalUserIds.set(finali);
                        Thread.sleep(1000);
                        System.out.println("ThreadLocal:"+threadLocalUserIds.get());
                    }catch(Exception e){
                        e.printStackTrace();
                    }

                }
            }).start();
        }


        for(int i = 0 ; i < 10 ; i++){
            final int finali = i;
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        userId = finali;
                        Thread.sleep(1000);
                        System.out.println("UserId:" + userId);
                    }catch(Exception e){
                        e.printStackTrace();
                    }

                }
            }).start();
        }
    }

    public static void testExecutor(){
        //ExecutorService service = Executors.newSingleThreadExecutor();
        ExecutorService service = Executors.newFixedThreadPool(2);
        service.submit(new Runnable() {
            @Override
            public void run() {
                for(int i = 0 ; i < 10;i++){
                    try {
                        Thread.sleep(1000);
                        System.out.println("Executor1:" + i);
                    }catch(Exception e){
                        e.printStackTrace();
                    }
                }
            }
        });

        service.submit(new Runnable() {
            @Override
            public void run() {
                for(int i = 0 ; i < 10;i++){
                    try {
                        Thread.sleep(1000);
                        System.out.println("Executor2:" + i);
                    }catch(Exception e){
                        e.printStackTrace();
                    }
                }
            }
        });
        //service.shutdown();
        while(!service.isTerminated()){
            try {
                Thread.sleep(4000);
                service.shutdownNow();
                System.out.println("Wait for termination.");
            }catch(Exception e){
                e.printStackTrace();
            }
        }
    }


    private static int counter = 0;
    private static AtomicInteger atomicInteger = new AtomicInteger(0);

    public static void testWithoutAtomic(){
        for(int i = 0 ; i < 10 ;i++){
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep(1000);
                        for(int j = 0 ; j < 10 ;++j){
                            counter++;
                            System.out.println(counter);
                        }
                    }catch(Exception e){
                        e.printStackTrace();
                    }

                }
            }).start();
        }
    }

    public static void testWithAtomic(){
        for(int i = 0 ; i < 10 ;i++){
            new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Thread.sleep(1000);
                        for(int j = 0 ; j < 10 ;++j){
                            System.out.println(atomicInteger.incrementAndGet());
                        }
                    }catch(Exception e){
                        e.printStackTrace();
                    }

                }
            }).start();
        }
    }

    public static void testAtomic(){
        //testWithoutAtomic();
        testWithAtomic();
    }

    public static void testFuture() {
        ExecutorService service = Executors.newSingleThreadExecutor();
        Future<Integer> future = service.submit(new Callable<Integer>() {
            @Override
            public Integer call() throws Exception {
                //Thread.sleep(1000);
                throw new IllegalArgumentException("异常");
                //return 1;
            }
        });

        service.shutdown();
        try {
            System.out.println(future.get());
            //System.out.println(future.get(100, TimeUnit.MILLISECONDS));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args){
        //testThread();
        //testSynchronized();
        //testBlockingQueue();
        //testThreadLocal();
        //testExecutor();
        testAtomic();
    }

}
