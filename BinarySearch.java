package com.dsa.algorthims;

import java.util.List;


// for bin search to work
//1. the array must be sorted
//steps for the algo
//need to find a target element
//initalise  mid, left , right  elements
//if mid < target  replace left = mid +1
//if mid > target  replace right = mid -1
//-----------------

//order agnostic  bsearch
//if the start < end then asc else desc
public class BinarySearch {

    public static void main(String[] args) {
      int[] arr={1,2,3,4,5,6,7};
      int target = 3;
      int ans = binarySearch(arr,target);
      System.out.println("the index of the target element is "+ans);
    }

      static int binarySearch(int[] arr, int target){
        int start = 0;
        int end = arr.length - 1;
        while( start<=end ){
            int mid = start + ( end - start)/2;
        if( target < arr[mid]){
            end = mid -1;
        }else if (target > arr[mid]){
            start = mid + 1 ;
        }else{
            return  mid;
        }
        }
        return -1;
    }
}
