package com.objective.codehero;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {

    private Boolean isClosed = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.splash_activity_layout);

        new android.os.Handler().postDelayed(
            new Runnable() {
                public void run() {
                    if (!SplashActivity.this.isClosed) {
                        Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                        startActivity(intent);
                        finish();
                    }
                }
            },
            1000
        );
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        this.isClosed = true;
    }
}